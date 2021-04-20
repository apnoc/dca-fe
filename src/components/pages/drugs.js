import React,  {Component} from 'react' ;
import data from '../../data.json';


class OnlineLicensing extends Component {
    render() {
        return (
            <div className="content__background">
                {
                  data.OnlineLicenses.map((information) => {
                      return(
                          <section className="container">
                               <div className="row">
                                            <section className="col-lg-8 p-4">
                                                <div>
                                                <h3>{information.heading}</h3>                                    
                                                <p className="text-justify p-2">{information.p}</p>  
                                                </div>   
                                                <div>
                                                    {
                                                        information.content.map((details) => {
                                                            return(
                                                                <div>
                                                                <a  download href={details.link} className=" mx-4 px-5">{details.description}</a>
                                                              </div>
                                                            );
                                                        })
                                                    }
                                                </div>                                                                                        
                                           </section>
                                
                                           <section className="col-lg-4 p-4">
                     {
                    data.HomePages.map((directory) => {
                        return (
                            <div className="content_info">
                                
                                        <h4> {directory.header}</h4>                               
                                    
                            {
                                directory.paragraph.map((details) => {
                                    return (
                                        <ul className="list-group list-group-flush ">
                                        <li className="list-group-item"> 
                                        <a href={details.link}>
                                            <span className="p-2"> 
                                                <strong>
                                                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
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

export default OnlineLicensing;