import React, { Component } from 'react'
import "./contacts.css"




const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component {
    state = {
        contacts: [...contacts],
        filtred: [...contacts],     
        search: ''
     
    }
  
  
    
    handleSearchChange = async(e) => {
        await  this.setState({search: e.target.value});  
       this.qwe();           
     };
  
    qwe = () => {
         this.setState(() => {
            const perv = this.state.search.toLowerCase();
            const filter = this.state.contacts.filter(item =>
                item.firstName.toLowerCase().includes(perv) ||
                item.lastName.toLowerCase().includes(perv) ||
                item.phone.toLowerCase().includes(perv) )
               
                return {
                    filtred: [...filter]
                }
            });
    }

   
    render(){     
                 
        return (
            
            <div className="osnova">
                <div className="head">
                    <h1 className="h1">Контакты</h1>
                    <input className="search__btn" type="search" placeholder="Search..." value={this.state.search}
                   onChange={this.handleSearchChange}>
                       </input>
                        <div className="profile">
                            <img className="photo" src="" />
                            <div>
                                <h3>Pasha Kharkavchyk <br/></h3>                               
                            </div>
                        </div>
                   
                    { this.state.filtred.map((cnt) => (
                <div className="contactHead">
                    <span className="contactName">  {cnt.firstName}<br/></span>
                    <span className="contactName">  {cnt.lastName}</span>
                    <span>    ({cnt.phone})</span>
                    <span>    {cnt.gender} <hr/></span>
                    
                </div>
            )) }
                </div>
            </div>
        
        )     
        
    }
}

export default Contacts
