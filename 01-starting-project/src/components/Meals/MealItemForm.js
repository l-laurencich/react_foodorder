import React from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const formSubmithandler = (event) => {
  event.preventdefault();
};

const MealItemForm = (props) => {
  return (
    <form onSubmit={formSubmithandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
