import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const zips = [
    95630, 95624, 94509, 95758, 95608, 95828, 95670, 95757, 95843, 95610, 95822, 95831, 95628, 95621,
    95835, 95833, 95826, 95821, 95838, 95820, 95825, 95632, 95660, 95842, 95662, 95824, 95834, 95815,
    95829, 95864, 95827, 95818, 95841, 95819, 95816, 95673, 95742, 95817, 95832, 95814, 95626, 95811,
    94571, 95683, 95693, 95655, 95638, 95830, 95690, 95615, 95652, 94512, 95641, 95837, 95686, 94246,
    94286, 95887, 95609, 95611, 95639, 95671, 95680, 95741, 95743, 95759, 95763, 95812, 95813, 95840,
    95852, 95851, 95857, 95853, 95860, 95866, 95865, 95867, 95894, 94236, 94240, 94239, 94244, 94245,
    94248, 94247, 94250, 94249, 94253, 94252, 94256, 94254, 94258, 94257, 94261, 94259, 94263, 94262,
    94268, 94267, 94271, 94269, 94274, 94273, 94278, 94277, 94280, 94279, 94283, 94282, 94285, 94284,
    94287, 94289, 94288, 94291, 94290, 94294, 94293, 94296, 94295, 94298, 94297, 94299, 94203, 94205,
    94204, 94207, 94206, 94209, 94208, 94229, 94211, 94232, 94230, 94235, 94234, 94237, 95693, 95683,
    95695, 95776, 95991, 95993, 95605, 95612, 95691, 95202, 95203, 95204, 95205, 95206, 95207, 95209,
    95210, 95211, 95212, 95215, 95219, 95231, 95336, 95661, 95677, 95678, 95746, 95747, 95765, 95648,
    95650, 95655, 95667, 95961, 95901, 95240, 95242, 95632, 95630, 95823, 95828, 95620, 95762, 95626,
    95619, 95758, 95757, 95624, 95616, 95618, 95672, 95682, 95608, 95628, 95843
];

const popover1 = (
    <Popover id="popover-basic1">
        <Popover.Body>
            Antelope,
            Arden-Arcade,
            Carmichael,
            Citrus Heights,
            Cameron Park,
            Davis,
            Diamond Springs,
            Elk Grove,
            Elverta,
            El Dorado Hills,
            Dixon,
            Fair Oaks,
            Florin,
            Folsom,
            Galt,
            Granite Bay,
            Linda,
            Lodi,
            North Highlands,
            Orangevale,
            Placerville,
            Rancho Cordova,
            Rancho Murieta,
            Rio Linda,
            Rocklin,
            Roseville,
            Sacramento,
            Stockton,
            West Sacramento,
            Wilton,
            Woodland,
            Yuba City
        </Popover.Body>
    </Popover>
);

const popover2 = (
    <Popover id="popover-basic2">
        <Popover.Body>
            Cal Water Service,
            California American Water Company,
            City of Davis,
            City of Folsom,
            City of Galt,
            City of Roseville,
            City of Sacramento,
            City of Stockton Water District,
            City of West Sacramento,
            City of Woodland,
            Elk Grove Water Service,
            Galt Irrigation District,
            Golden State Water Company,
            Placer County Water Agency,
            Rancho Murieta Community Service District,
            Rio Linda/Elverta Community Water District,
            Sacramento County EMD,
            Sacramento Suburban Water District
        </Popover.Body>
    </Popover>
);

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            zipcode: '',
            text: '',
            success: false,
            error: false,
            badZip: false
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleZip = this.handleZip.bind(this);
        this.handleText = this.handleText.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    openSuccess = () => {
        this.setState({success:true});
    }

    openError = () => {
        this.setState({error:true});
    }

    openZip = () => {
        this.setState({badZip:true});
    }

    closeSuccess = () => {
        this.setState({success:false});
    }

    closeError = () => {
        this.setState({error:false});
    }

    closeZip = () => {
        this.setState({badZip:false});
    }

    sendEmail = async (e) => {

        e.preventDefault();

        const data = {
            "email": this.state.email,
            "phone": this.state.phone,
            "zipcode": this.state.zipcode,
            "text": this.state.text
        }

        try {
            if (zips.includes(Number(this.state.zipcode))) {
                let res = await fetch("https://five-star-backflow-backend.vercel.app/api/email", { 
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (res.status === 200) {
                    this.openSuccess();
                    this.setState({
                        email: '',
                        phone: '',
                        zipcode: '',
                        text: ''
                    });
                } else {
                    this.openError();
                }
            } else {
                this.openZip();
            }
        } catch (err) {
            this.openError();
            console.log(err);
        }
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    handleZip = (e) => {
        this.setState({
            zipcode: e.target.value
        });
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {

        return (

            <Container id="contact">
                <Container>
                    <h2 className="display-4 text-start"><i className="far fa-address-book"></i>Contact Us</h2>
                    <hr/>
                    <Row id="contact-section">
                        <div className="col-12 col-lg-6 contact-column contact-info text-start">
                            <h2 className="pb-2 text-start">Contact Info</h2>
                            <p className="py-1 text-start">PO Box 340519<br/>Sacramento, CA 95834</p>
                            <a href="tel:19165809834"><p className="py-1 text-start">P: (916) 580-9834</p></a>
                            <p className="py-1 text-start">E: fivestarbackflow@gmail.com</p>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
                                <Button type="button" className="btn btn-md btn-secondary my-3 d-none d-md-inline" data-bs-toggle="popover1"
                                        data-bs-container="body" data-bs-title="Popover title" data-bs-placement="right">Click to see communities we serve
                                </Button>
                            </OverlayTrigger>
                            <br/>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                                <Button type="button" className="btn btn-md btn-secondary mb-3 d-none d-md-inline" data-bs-toggle="popover2"
                                        data-bs-container="body" data-bs-title="Popover title" data-bs-placement="right">Click to see water purveyors we work with
                                </Button>
                            </OverlayTrigger>
                            <br/>
                            <h4 className="py-2">Follow Us</h4>
                            <a href="https://www.facebook.com/fivestarbackflow/"><img className="me-2 mb-2" width="50px" src="https://img.icons8.com/fluency/240/null/facebook.png" alt="yelp"/></a>
                            <a href="https://www.yelp.com/biz/five-star-backflow-services-sacramento"><img className="mb-2" width="50px" src="https://img.icons8.com/color/480/null/yelp.png" alt="yelp"/></a>
                        </div>
                        <div className="col-12 col-lg-6 contact-column send-message">
                            <h2 className="text-start">Send us a message</h2>
                            <form onSubmit={this.sendEmail}>
                                <div className="form-group">
                                    <label className="float-start my-2" htmlFor="email">E-mail</label>
                                    <input className="form-control" type="email" id="email" name="email" placeholder="Your email..."
                                           required value={this.state.email} onChange={this.handleEmail.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label className="float-start my-2" htmlFor="phone">Phone Number (optional)</label>
                                    <input className="form-control" type="phone" id="phone" name="phone"
                                           placeholder="Your phone number..." value={this.state.phone} onChange={this.handlePhone.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label className="float-start my-2" htmlFor="zip">Zip Code</label>
                                    <input className="form-control" type="text" id="zip" name="zip"
                                           placeholder="Your 5 digit zip code..." maxLength="5" autoComplete="postal-code"
                                           pattern="^([0-9]{5})$" required value={this.state.zipcode} onChange={this.handleZip.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label className="float-start my-2" htmlFor="subject">Message</label>
                                    <textarea className="text-body form-control" id="message" name="message"
                                              placeholder="Write something..." required value={this.state.text} onChange={this.handleText.bind(this)}></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn px-4 btn-secondary text-light float-start" />
                                </div>
                            </form>
                            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} open={this.state.success} autoHideDuration={4000} onClose={this.closeSuccess}>
                                <Alert onClose={this.closeSuccess} severity="success" sx={{ width: '100%' }}>
                                    E-mail sent successfully! We'll get back to you soon!
                                </Alert>
                            </Snackbar>
                            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} open={this.state.error} autoHideDuration={4000} onClose={this.closeError}>
                                <Alert onClose={this.closeError} severity="error" sx={{ width: '100%' }}>
                                    Error sending e-mail
                                </Alert>
                            </Snackbar>
                            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} open={this.state.badZip} autoHideDuration={4000} onClose={this.closeZip}>
                                <Alert onClose={this.closeZip} severity="error" sx={{ width: '100%' }}>
                                    Sorry but you live outside our service area
                                </Alert>
                            </Snackbar>
                        </div>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Contact;