import React from 'react';
import Note from './Note.js';

class Notes extends React.Component {
  state = {
    notes: []
  }

  componentDidMount() {

  }

  addNote() {

  }

  updateNotes() {

  }

  deleteNote(id) {

  }

  render() {
    return (
      <div className="Notes">  
        <div className="Notes-title">
          <h2 className="Notes-title-text">Notes</h2>
          <button className="Notes-button-update" type="button">&#x1F503;</button>
        </div>
        <div className="Notes-notes">
          {this.state.notes.map(({ id, text }) => 
            <Note text={text} onButtonClick={() => this.deleteNote(id)} key={id} />
          )}
        </div>
        <form className="Notes-form">
          <label className="Notes-form-label">
            New notes
            <textarea className="Notes-form-input" rows="8" name="note" />
          </label>
          <button className="Notes-button-add" type="submit">&#x27A4;</button>
        </form>
      </div>
    );
  }
}

export default Notes;
