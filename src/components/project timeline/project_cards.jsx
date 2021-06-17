import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BlueButton from '../Buttons/Buttons';


function ProjectCards(props) {
    return(
        
                        

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ borderTop:'3px solid #7C3AED', background: '#fff', color: '#7C3AED'}}
                                contentArrowStyle={{borderRight: '7px solid rgb(124,58,237)'}}
                                date={props.date}
                                iconStyle={{ background:'#7C3AED', color:'#fff' }}
                                
                                
                            >
                                <div>
                                    <h3 className="vertical-timeline-element-title font-bold">{props.cardTitle}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{props.cardSubTitle}</h4>
                                </div>

                                <div className="flex justify-end p-4">
                                    <BlueButton buttonName="Source Code" link={props.cardButtonLink}/>

                                </div>
                            </VerticalTimelineElement>

                        
        

    );
}

export default ProjectCards