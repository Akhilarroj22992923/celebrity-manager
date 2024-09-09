import React, { useState } from 'react';

interface CelebrityItemProps {
  celebrity: any;
  onDelete: (id: number) => void;
}

const CelebrityItem: React.FC<CelebrityItemProps> = ({ celebrity, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState(celebrity);
  const [hasChanged, setHasChanged] = useState(false);

  // Function to calculate the age based on Date of Birth
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Handle the accordion's toggle
  const handleAccordionClick = () => {
    if (!isEditing) {
      setIsOpen(!isOpen);
    }
  };

  // Handle editing of the celebrity's details
  const handleEditClick = () => {
    if (calculateAge(celebrity.dob) >= 18) {
      setIsEditing(true);
    } else {
      alert('User is not an adult.');
    }
  };

  // Save the edited details
  const handleSaveClick = () => {
    if (hasChanged) {
      setIsEditing(false);
      setHasChanged(false);
    }
  };

  // Cancel editing and revert changes
  const handleCancelClick = () => {
    setEditedDetails(celebrity);
    setIsEditing(false);
    setHasChanged(false);
  };

  // Handle input changes for the edited details
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
    setHasChanged(true);
  };

  // Handle deletion with confirmation
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this celebrity?");
    if (confirmDelete) {
      onDelete(celebrity.id);
    }
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleAccordionClick}>
        <img src={celebrity.picture} alt={celebrity.first} />
        <h2>{`${celebrity.first} ${celebrity.last}`}</h2>
        <button className="accordion-toggle">{isOpen ? '-' : '+'}</button>
      </div>

      {isOpen && (
        <div className="accordion-content">
          {!isEditing ? (
            <div className="celebrity-details">
              <div className="details-grid">
                <div className="detail-item">Age: {calculateAge(celebrity.dob)}</div>
                <div className="detail-item">Gender: {celebrity.gender}</div>
                <div className="detail-item">Country: {celebrity.country}</div>
              </div>
              <div className="description">
                <strong>Description</strong>
                <p>{celebrity.description}</p>
              </div>
              <div className="button-group">
                <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
              </div>
            </div>
          ) : (
            <div className="celebrity-edit">
              <div className="edit-grid">
                <div className="edit-item">
                  <label>Age</label>
                  <input type="text" value={calculateAge(celebrity.dob)} disabled />
                </div>
                <div className="edit-item">
                  <label>Gender</label>
                  <select name="gender" value={editedDetails.gender} onChange={handleInputChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    <option value="rather_not_say">Rather not say</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="edit-item">
                  <label>Country</label>
                  <input name="country" value={editedDetails.country} onChange={handleInputChange} />
                </div>
              </div>
              <div className="edit-description">
                <label>Description</label>
                <textarea name="description" value={editedDetails.description} onChange={handleInputChange} rows={3} />
              </div>
              <div className="button-group">
                <button className="save-btn" disabled={!hasChanged} onClick={handleSaveClick}>Save</button>
                <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CelebrityItem;
