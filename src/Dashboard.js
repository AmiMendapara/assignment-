import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from './store';
import Widget from './Widget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);
  const dispatch = useDispatch();
  const [newWidget, setNewWidget] = useState({ name: '', text: '', categoryId: null });

  const handleAddWidget = () => {
    if (newWidget.categoryId && newWidget.name && newWidget.text) {
      const widget = {
        id: Date.now(),
        name: newWidget.name,
        text: newWidget.text
      };
      dispatch(addWidget({ categoryId: newWidget.categoryId, widget }));
      setNewWidget({ name: '', text: '', categoryId: null });
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard">
        {categories.map(category => (
          <div key={category.id} className="category">
            <h2>{category.name}</h2>
            <div className="widgets">
              {category.widgets.map(widget => (
                <Widget
                  key={widget.id}
                  categoryId={category.id}
                  widget={widget}
                  onRemove={handleRemoveWidget}
                />
              ))}
              <button className="add-widget-btn" onClick={() => setNewWidget({ ...newWidget, categoryId: category.id })}>
                <FontAwesomeIcon icon={faPlus} /> Add Widget
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-widget-form">
        <h3>Add Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidget.name}
          onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidget.text}
          onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
        />
        <select
          value={newWidget.categoryId || ''}
          onChange={(e) => setNewWidget({ ...newWidget, categoryId: parseInt(e.target.value) })}
        >
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <button onClick={handleAddWidget}>Add Widget</button>
      </div>
    </div>
  );
};

export default Dashboard;
