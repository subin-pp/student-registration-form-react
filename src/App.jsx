import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  InputLabel,
} from "@mui/material";

function App() {
  const [email, setEmail] = useState("");
  const [InvalideEmail, setInvalideEmail] = useState(false);

  const [userName, setUserName] = useState("");
  const [InvaliduserName, setInvaliduserName] = useState(false);

  const [dob, setDob] = useState("");
  const [InvalidDob, setInvalidDob] = useState(false);

  const [gender, setGender] = useState("");
  const [InvalidGender, setInvalidGender] = useState(false);

  const [course, setCourse] = useState("");
  const [InvalidCourse, setInvalidCourse] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [InvalidPhoneNumber, setInvalidPhoneNumber] = useState(false);

  const [address, setAddress] = useState("");
  const [InvalidAddress, setInvalidAddress] = useState(false);

  // Function for validating input fields
  const InputValidate = (Inputvalue) => {
    const { name, value } = Inputvalue;

    if (name === "username") {
      setUserName(value);
      if (value.match(/^[a-zA-Z][a-zA-Z ]{2,19}$/)) {
        setInvaliduserName(false);
      } else {
        setInvaliduserName(true);
      }
    } else if (name === "email") {
      setEmail(value);
      if (
        value.match(
          /^(?!\.)("?(?!@)[\w&'*+._%-]+(?<!\\)\.?)*"?(?<=\S)@([A-Za-z0-9-]+\.)+[A-Za-z]{2,7}$/
        )
      ) {
        setInvalideEmail(false);
      } else {
        setInvalideEmail(true);
      }
    } else if (name === "dob") {
      setDob(value);
      const currentDate = new Date();
      const birthDate = new Date(value);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      const month = currentDate.getMonth();
      if (
        month < birthDate.getMonth() ||
        (month === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--; // Adjust for not yet having had a birthday this year
      }
      if (age >= 16) {
        setInvalidDob(false);
      } else {
        setInvalidDob(true);
      }
    } else if (name === "gender") {
      setGender(value);
      if (value) {
        setInvalidGender(false);
      } else {
        setInvalidGender(true);
      }
    } else if (name === "course") {
      setCourse(value);
      if (value) {
        setInvalidCourse(false);
      } else {
        setInvalidCourse(true);
      }
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
      if (value.match(/^\d{10}$/)) {
        setInvalidPhoneNumber(false);
      } else {
        setInvalidPhoneNumber(true);
      }
    } else if (name === "address") {
      setAddress(value);
      if (value.trim()) {
        setInvalidAddress(false);
      } else {
        setInvalidAddress(true);
      }
    }
  };

  // Function to display content after form validation
  const displayContent = () => {
    if (
      email && dob && userName && gender && course && phoneNumber && address) {
      alert(`Data stored successfully 
        Your Name : ${userName}
        Your Date of Birth : ${dob}
        Your Course : ${course}
        Your Gender : ${gender}
        Your Phone Number : ${phoneNumber}
        Your Address : ${address}
        Your Email Address : ${email}
      `);
      removeField()
    } else {
      alert("Please fill in all the required fields correctly.");
    }
  };

  // Function to clear all the data
  const removeField = () => {
    setEmail("");
    setUserName("");
    setDob("");
    setGender("");
    setCourse("");
    setPhoneNumber("");
    setAddress("");

    setInvalideEmail(false);
    setInvaliduserName(false);
    setInvalidDob(false);
    setInvalidGender(false);
    setInvalidCourse(false);
    setInvalidPhoneNumber(false);
    setInvalidAddress(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        STUDENT REGISTRATION FORM
      </Typography>

      <Box sx={{ mt: 6 }}>
        <Grid container spacing={3}>
          {/* General Information Section */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: 2,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "blue", mb: 2, fontWeight: "bold" }}
            >
              GENERAL INFORMATION
            </Typography>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              name="username"
              value={userName}
              onChange={(e) => InputValidate(e.target)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "grey", 
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey", 
                  },
                  "& input": {
                    backgroundColor: "transparent", 
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "blue", 
                },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "blue", 
                },
                "& .MuiOutlinedInput-root.Mui-focused input": {
                  backgroundColor: "white", 
                },
              }}
            />
            {InvaliduserName && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Invalid username
              </Typography>
            )}

            <TextField
              fullWidth
              label="Date of Birth"
              variant="outlined"
              margin="normal"
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => InputValidate(e.target)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "grey", 
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey", 
                  },
                  "& input": {
                    backgroundColor: "transparent",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "blue", 
                },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "blue", 
                },
                "& .MuiOutlinedInput-root.Mui-focused input": {
                  backgroundColor: "white", 
                },
              }}
            />
            {InvalidDob && (
              <Typography sx={{ color: "red", mt: 1 }}>
                You must be at least 16 years old
              </Typography>
            )}

            <FormControl fullWidth margin="normal">
              <InputLabel>Course</InputLabel>
              <Select
                name="course"
                value={course}
                onChange={(e) => InputValidate(e.target)}
                defaultValue=""
              >
                <MenuItem value="biology">Biology</MenuItem>
                <MenuItem value="computer-science">Computer Science</MenuItem>
                <MenuItem value="commerce">Commerce</MenuItem>
                <MenuItem value="humanities">Humanities</MenuItem>
              </Select>
            </FormControl>
            {InvalidCourse && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Please select a course
              </Typography>
            )}

            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={gender}
                onChange={(e) => InputValidate(e.target)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="Others" control={<Radio />} label="Others" />
              </RadioGroup>
            </FormControl>
            {InvalidGender && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Please select a gender
              </Typography>
            )}
          </Grid>

          {/* Contact Details Section */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundColor: "blue",
              borderRadius: "8px",
              padding: 2,
              color: "white",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "white", mb: 2, fontWeight: "bold" }}
            >
              CONTACT DETAILS
            </Typography>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              name="email"
              value={email}
              onChange={(e) => InputValidate(e.target)}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Focused label color
                },
              }}
            />
            {InvalideEmail && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Invalid Email address
              </Typography>
            )}

            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              margin="normal"
              name="address"
              value={address}
              onChange={(e) => InputValidate(e.target)}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Focused label color
                },
              }}
            />
            {InvalidAddress && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Address cannot be empty
              </Typography>
            )}

            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              margin="normal"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => InputValidate(e.target)}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", 
                },
              }}
            />
            {InvalidPhoneNumber && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Phone number must be 10 digits
              </Typography>
            )}
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button variant="contained" color="primary" onClick={displayContent}>
            Register
          </Button>
          <Button variant="outlined" color="secondary" onClick={removeField}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
