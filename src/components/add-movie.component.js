import { useState } from "react";
import "../app.css";
import FormInput from "../components/FormInput";
const AddMovie = (props) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "username",
          type: "number",
          placeholder: "Please Enter Movie Rank",
          errorMessage:
            "Rank should be 3-16 characters and shouldn't include any special character!",
          label: "Rank",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Please Enter Movie Title",
          errorMessage: "It should be a valid email address!",
          label: "Title",
          required: true,
        },
        
        {
          id: 4,
          name: "password",
          type: "text",
          placeholder: "Please Upload Poster",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Poster",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
            id: 5,
            name: "username",
            type: "number",
            placeholder: "Please Enter Rating",
            errorMessage:
              "Rating should be 3-16 characters and shouldn't include any special character!",
            label: "Rating",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
        
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Add Movie</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
          </form>
        </div>
      );
    };
 
export default AddMovie;