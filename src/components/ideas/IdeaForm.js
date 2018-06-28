import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const IdeaForm = ({ idea, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Ideas</h1>
      <TextInput
        name = "name"
        label = "Title"
        value = { idea.name }
        onChange = { onChange }
        error = { errors.idea }
      />

      <TextInput
        name = "description"
        label="Description"
        value={ idea.description }
        onChange={ onChange }
        error={ errors.description }
      />

      <TextInput
        name = "problem"
        label="Problem"
        value={ idea.problem }
        onChange={ onChange }
        error={ errors.problem }
      />

      <TextInput
        name = "industry"
        label="Industry"
        value={ idea.industry }
        onChange={ onChange }
        error={ errors.industry }
      />

      <TextInput
        name = "team"
        label="Team"
        value={ idea.team }
        onChange={ onChange }
        error={ errors.team }
      />

      <TextInput
        name = "geographical_focus"
        label="Geographical focus"
        value={ idea.geographical_focus }
        onChange={ onChange }
        error={ errors.geographical_focus }
      />

      <TextInput
        name = "requirements"
        label="Requirements"
        value={ idea.requirements }
        onChange={ onChange }
        error={ errors.requirements }
      />

      <TextInput
        name = "next_steps"
        label="Next steps"
        value={ idea.next_steps }
        onChange={ onChange }
        error={ errors.next_steps }
      />

      <TextInput
        name = "trader_id"
        label="Trader id"
        value={ idea.trader_id }
        onChange={ onChange }
        error={ errors.trader_id }
      />

      <input
        type="submit"
        disabled={ saving }
        value={ saving ? 'Saving...' : 'Save' }
        className="btn btn-primary"
        onClick={ onSave }/>
    </form>
  );
};

export default IdeaForm;
