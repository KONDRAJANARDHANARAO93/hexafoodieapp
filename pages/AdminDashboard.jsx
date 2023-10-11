import React, { useState } from 'react';
import { FaMale, FaTh, FaThList, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
  const [password, setPassword] = useState('');
  const [passwordPromptVisible, setPasswordPromptVisible] = useState(false);
  const [menuItemName, setMenuItemName] = useState('');
  const [priceChanges, setPriceChanges] = useState('');
  const [deleteMenuItemId, setDeleteMenuItemId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuChangesSubmit = () => {
    // Handle submitting menu changes
    alert(`Menu item "${menuItemName}" admin password is required to change a menu item`);
    setPasswordPromptVisible(true);
  };

  const handlePriceChangesSubmit = () => {
    // Handle submitting price changes
    alert(`Price changes "${priceChanges}"admin password is required to change prices`);
    setPasswordPromptVisible(true);
  };

  const handleDeleteMenuItem = () => {
    // Handle deleting menu item
    alert(`Menu item with ID "${deleteMenuItemId}" admin password is required to delete menu item!`);
    setPasswordPromptVisible(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    // For demonstration purposes, we'll check a hardcoded admin password
    const hardcodedAdminPassword = 'Janardhanarao@93'; // Change this to your actual hardcoded password
    if (password === hardcodedAdminPassword) {
      setPasswordPromptVisible(false);
    } else {
      alert('Incorrect admin password. Please try again.');
    }
  };

  const menuItem = [
    {
      path: '/foods',
      name: 'menu',
      icon: <FaMale />,
    },
    {
      path: '/cart',
      name: 'Additems',
      icon: <FaTh />,
    },
    {
      path: '/cart',
      name: 'OrdersList',
      icon: <FaThList />,
    },
    {
      path: '/home',
      name: 'Logout',
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Foodie app
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggleSidebar} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div style={{ marginLeft: isOpen ? '300px' : '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <div style={{ marginBottom: '10px', width: '100%' }}>
            <h4>Menu Item</h4>
            <input
              type="text"
              id="menuChangesInput"
              placeholder="Enter menu itemName..."
              value={menuItemName}
              onChange={(e) => setMenuItemName(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <button onClick={handleMenuChangesSubmit}>Submit Menu Changes</button>
          </div>

          <div style={{ marginBottom: '10px', width: '100%' }}>
            <h4>Price Changes</h4>
            <input
              type="text"
              id="priceChangesInput"
              placeholder="Enter price changes..."
              value={priceChanges}
              onChange={(e) => setPriceChanges(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <button onClick={handlePriceChangesSubmit}>Submit Price Changes</button>
          </div>

          <div style={{ marginBottom: '10px', width: '100%' }}>
            <h4>Delete Menu Item</h4>
            <input
              type="text"
              id="deleteMenuItemInput"
              placeholder="Enter item ID..."
              value={deleteMenuItemId}
              onChange={(e) => setDeleteMenuItemId(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <button onClick={handleDeleteMenuItem}>Delete Menu Item</button>
          </div>

          {passwordPromptVisible && (
            <div style={{ width: '100%', marginBottom: '10px', textAlign: 'center' }}>
              <h3>Enter Admin Password</h3>
              <label htmlFor="adminPasswordInput">Admin Password:</label>
              <input
                type="password"
                id="adminPasswordInput"
                placeholder="Enter admin password..."
                value={password}
                onChange={handlePasswordChange}
                style={{
                  width: '70%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '16px',
                }}
              />
              <button onClick={handlePasswordSubmit} style={{ padding: '10px 20px', fontSize: '18px', marginLeft: '10px' }}>
                Submit Password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
