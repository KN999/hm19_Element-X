import React, {Component} from 'react';  

/* Import Components */ 
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'


class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        mobileNumber: '',
        Address: '',
        Id: '',
        about: ''

      },

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handlemobileNumber = this.handlemobileNumber.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleId = this.handleId.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleId(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newUser : 
         {...prevState.newUser, Id: value
         }
       }), () => console.log(this.state.newUser))
   }

  handlemobileNumber(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, mobileNumber: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   

  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newUser: {
          name: '',
          mobileNumber: '',
          Address: '',
          skills: [],
          about: ''
        },
      })
  }

  render() {
    return (
      <div>
          <h1 className="text-center">Register an Issue</h1>
    
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       
          <Input inputType={'text'}
                  title= {'Full Name'} 
                  name= {'name'}
                  value={this.state.newUser.name} 
                  placeholder = {'Enter your name'}
                  handleChange = {this.handleInput}
                  
                  /> {/* Name of the user */}
        
          <Input inputType={'number'} 
                name={'mobileNumber'}
                 title= {'Mobile Number'} 
                 value={this.state.newUser.mobileNumber} 
                placeholder = {'Enter your Mobile Number'}
                 handleChange={this.handlemobileNumber} /> {/* mobileNumber */} 


          <Input inputType={'text'}
                            title= {'Address'} 
                            name= {'Address'}
                            value={this.state.newUser.name} 
                            placeholder = {'Enter your Address'}
                            handleChange = {this.handleInput}
                            
                            /> {/* Address of the user */}
          <Input 
            inputType={'text'}
            title= {'ID proof'} 
            name= {'Id'}
            value={this.state.newUser.name} 
            placeholder = {'Enter your ID'}
            handleChange = {this.handleInput} /> {/* Name of the user */}

          <TextArea
            title={'Problem'}
            rows={4}
            value={this.state.newUser.about}
            name={'currentPetInfo'}
            handleChange={this.handleTextArea}
            placeholder={'Describe your Problem'} />{/* About you */}

          <Button 
              className="btn-success"
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
          
        </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;