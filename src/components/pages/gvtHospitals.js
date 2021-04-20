import React,  {Component} from 'react' ;
import data from '../../data.json';
import './stylesheet.css'

class MedicalStores extends Component {
    render() {
        return (
            <div >
              {
                  data.Medicalgvt.map((information) => {
                      return(
                          <section className="container">
                               <div className="row">
                               <section className="  col-lg-8 p-4">
                                                <div className="content">
                                                <h3>{information.heading}</h3>                                    
                                                <h5 >{information.p}</h5>  
                                                <div>

                                                
                                               
                                                    {
                                                        information.content.map((details) => {
                                                            return(
                                                                <table className="table">
                                                                    <thead>
                                                                        {
                                                                        details.heading.map((tables) => {
                                                                            return(
                                                                                <tr>
                                                                                    <th scope="col">{tables.h1}</th>
                                                                                    <th scope="col">{tables.h2}</th>
                                                                                    <th scope="col">{tables.h3}</th>
                                                                                    <th scope="col">{tables.h4}</th>
                                                                                </tr>
                                                                            );
                                                                        }
                                                                        )}                                                                      
                                                                       
                                                                    </thead>
                                                                    <tbody>
                                                                    {
                                                                        details.Paragraph.map((description) => {
                                                                            return(
                                                                                <tr>
                                                                                    <th scope="row">{description.p1}</th>
                                                                                    <td>{description.p2}</td>
                                                                                    <td>{description.p3}</td>
                                                                                    <td>{description.p4}</td>
                                                                                </tr>
                                                                                );
                                                                            }
                                                                            )}                                                                   
                                                            
                                                                </tbody>
                                                                </table>
                                                            );
                                                        })
                                                    }
                                                </div>
                                                </div>                                                                                        
                                           </section>
                                
                                           <section className="col-lg-4 p-4">
                                           {
                    data.HomePages.map((directory) => {
                        return (
                            <div className="content_info">
                             <h4 className="content"> {directory.header}</h4>                               
                                    
                            {
                                directory.paragraph.map((details) => {
                                    return (
                                      
                                        <ul className="list-group list-group-flush ">
                                        <li className="list-group-item "> 
                                        <a  className="sub__header"
                                        href={details.link}>
                                            <span className=" px-2"> 
                                                <strong>
                                                    <i className="  fa fa-angle-double-right" aria-hidden="true"></i>
                                                </strong>                                                
                                            </span>{details.p}
                                            </a>
                                        </li>                       
                                       
                                    </ul> 
                                    );
                                })
                            }
                            </div>
                        )
                    })
                }
                  </section>
               
                                </div>                             
                          </section>
                      )
                  })  
                }




            </div>
        )
    }
}

export default MedicalStores;