import React, { useEffect, useState } from 'react';
import supabase from '../../supabase';

const Admin = () => {
  const [clients, setClients] = useState<any>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase
        .from('clients') // ✅ Replace with your actual table name
        .select('*');

      if (error) {
        console.error("Error fetching clients:", error.message);
      } else {
        console.log("Clients Table Data:", data); // ✅ Logs the entire table data
        setClients(data); // ✅ Store data in state
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-text">Admin Access: Clients List</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Joined Date</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.email}</td>
              <td>{new Date(client.created_at).toLocaleString()}</td> {/* ✅ Format date */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
