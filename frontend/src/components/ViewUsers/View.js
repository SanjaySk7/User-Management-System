import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../pages/Methods/slice";
import "./View.css";

const View = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.addUsers);
  const [editingRowId, setEditingRowId] = useState(null); // Tracks the row being edited
  const [editedData, setEditedData] = useState({}); // Tracks the edited data for the row

  // Dispatch action to fetch users
  useEffect(() => {
    dispatch(actions.fetchUsers());
  }, [dispatch]);

  // Handle edit button click
  const handleEdit = (userId, user) => {
    setEditingRowId(userId);
    setEditedData(user); // Initialize edited data with the current row's data
  };

  // Handle save button click
  const handleSave = () => {
    dispatch(actions.updateUsers({ id: editingRowId,...editedData }));
    setEditingRowId(null);
  };

  // Handle cancel button click
  const handleCancel = () => {
    setEditingRowId(null); // Exit edit mode without saving
    setEditedData({}); // Clear edited data
  };

  // Handle field change during editing
  const handleChange = (field, value) => {
    setEditedData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleDelete = (id) => {
    dispatch(actions.deleteUsers({ id })); // Dispatch delete action with user ID
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="view-container">
      <h1>View Users</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) :  Array.isArray(data) && data.length ? (
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {editingRowId === user._id ? (
                    <input
                      type="text"
                      value={editedData.name || ""}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingRowId === user._id ? (
                    <input
                      type="text"
                      value={editedData.email || ""}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingRowId === user._id ? (
                    <input
                      type="date"
                      value={editedData.dateOfBirth || ""}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    />
                  ) : (
                    formatDate(user.dateOfBirth)
                  )}
                </td>
                <td>
  {editingRowId === user._id ? (
    <div className="action-buttons">
      <button
        className="action-button save-button"
        onClick={handleSave}
      >
        Save
      </button>
      <button
        className="action-button cancel-button"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  ) : (
    <>
      <button
        className="action-button edit-button"
        onClick={() => handleEdit(user._id, user)}
      >
        Edit
      </button>
      <button
        className="action-button delete-button"
        onClick={() => handleDelete(user._id)}
      >
        Delete
      </button>
    </>
  )}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default View;
