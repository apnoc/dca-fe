import React, {Component} from 'react' ;
import data from '../data.json';



class SideBar extends Component {
    render() {
        return (
            <section className="container">                               
                  <div className="row">
                         <section >                     
                     {
                    data.HomePages.map((directory) => {
                        return (
                            < >
                             <h4> {directory.header}</h4>                               
                                    
                            {
                                directory.paragraph.map((details) => {
                                    return (
                                      
                                        <ul className="list-group list-group-flush ">
                                        <li className="list-group-item"> 
                                            <span className="p-2"> 
                                                <strong>
                                                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                                </strong>
                                            </span>{details.p}
                                        </li>                       
                                       
                                    </ul> 
                                    );
                                })
                            }
                            </>
                        )
                    })
                }
                  </section>
                </div>
            </section>
        );
    }
}

export default SideBar;