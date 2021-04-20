import React,  {Component} from 'react' ;
import data from '../../data.json';
import './stylesheet.css'

class News extends Component {
    render() {
        return (
            <div className="content__background">
              {
                  data.News.map((information) => {
                      return(
                          <section className="container">
                               <div className="row">
                               <section className="  col-lg-8 p-4">
                                                <div className="content">
                                                <h3>{information.heading}</h3>                                    
                                                <h5 >{information.p}</h5>  
                                                
                                                <h5 >{information.header}</h5>  
                                                    {
                                                        information.content.map((details) => {
                                                            return(
                                                                <ul> 
                                                                                                                                     
                                                                    <a  download href={details.link} className="subheader m-3">{details.description}</a>                                                                   
                                                                </ul>
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

export default News;