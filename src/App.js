import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LayoutIcon from '@material-ui/icons/ViewQuilt';
import RaiseHandIcon from '@material-ui/icons/PanTool';
import PrivateMessage from '@material-ui/icons/Textsms';
import SetAsPresenter from '@material-ui/icons/RecordVoiceOver';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ScreenShareIcon from '@material-ui/icons/Computer';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import ReactTooltip from 'react-tooltip';
import SettingsIcon from '@material-ui/icons/Settings';
import './App.css';

function App() {
  const [attendees, setAttendees] = useState([
    {
      name: 'Arnold',
      image: 'https://media.glamour.com/photos/5ffb2d27ee9e12e0b017e962/master/w_2560%2Cc_limit/150326910',
      mic: true,
      view: true,
    },
    {
      name: 'Tom',
      image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_146107054_2000133020009280105_347552.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Sharon',
      image: 'https://www.datocms-assets.com/39109/1616783947-sharon-stone-2.jpeg?auto=format%2Ccompress',
      mic: true,
      view: true,
    },
    {
      name: 'Will',
      image: 'https://api.time.com/wp-content/uploads/2016/06/will-smith-focus.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Loenardo',
      image: 'https://static.scientificamerican.com/sciam/cache/file/E4B0DF39-CEC2-42CE-B1978DE8D6B7D03E_source.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Julia',
      image: 'https://prod-images.tcm.com/Master-Profile-Images/JuliaRoberts.162850.2.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Brad',
      image: 'https://media.gq-magazine.co.uk/photos/5f44fc7be4b4aa9eec6fce0d/master/pass/20200825-dick.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Alicia',
      image: 'https://www.media1.hw-static.com/media/2020/04/aliciasilverstone_ink-1800x1200.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Nicole',
      image:
        'https://assets.vogue.com/photos/5fc522ee1066b359e5ff7f35/16:9/w_5104,h_2871,c_limit/GettyImages-1130611924.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Johnny',
      image:
        'https://www.hellomagazine.com/imagenes/homes/2020052490351/johnny-depp-inside-huge-garden-la-mansion-lockdown/0-433-60/johnny-depp-garden-t.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'Jodie',
      image: 'https://intheirownleaguehome.files.wordpress.com/2019/09/jodie-main-e1568398988914.jpg?w=1332',
      mic: true,
      view: true,
    },
    {
      name: 'Dwayne',
      image: 'https://media.gq-magazine.co.uk/photos/5d13ad12976fa30cf6f3b2a2/16:9/w_2560%2Cc_limit/HP.jpg',
      mic: true,
      view: true,
    },
    {
      name: 'John',
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/10/03/09/John_Travolta.jpg?width=1200',
      mic: true,
      view: true,
    },
    { name: 'Bruce', image: 'https://www.nme.com/wp-content/uploads/2021/01/BruceWillis.jpg', mic: true, view: true },
    {
      name: 'Sylvester',
      image:
        'https://media.nu.nl/m/c08x43da5kmy_wd1280.jpg/sylvester-stallone-niet-te-zien-in-derde-deel-van-creed.jpg',
      mic: true,
      view: true,
    },
  ]);
  const myDesktop =
    'https://img.gadgethacks.com/img/26/28/63485989830592/0/organize-your-cluttered-mac-desktop-with-desktop-groups-clean-fence-like-folders.w1456.jpg';
  const [presenting, setPresenting] = useState(`${attendees[0].name}`);
  const [chat, setChat] = useState(false);
  const [layoutSetting, setLayoutSetting] = useState(false);
  const [showHand, setShowHand] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [camera, setCamera] = useState(true);
  const [mic, setMic] = useState(true);
  const [screenShare, setScreenShare] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [settings, setSettings] = useState(false);

  const raiseHand = () => {
    setShowHand(true);
    setThumbsDown(false);
    setThumbsUp(false);
    setTimeout(() => {
      setShowHand(false);
    }, 8000);
  };

  const handleThumbsUp = () => {
    setThumbsUp(true);
    setThumbsDown(false);
    setShowHand(false);
    setTimeout(() => {
      setThumbsUp(false);
    }, 8000);
  };

  const handleThumbsDown = () => {
    setThumbsDown(true);
    setThumbsUp(false);
    setShowHand(false);
    setTimeout(() => {
      setThumbsDown(false);
    }, 8000);
  };

  const muteAll = () => {
    for (let i = 0; i < 15; i++) {
      setAttendees((attendees) => [...attendees, (attendees[i].mic = false)]);
    }
  };

  const unMuteAll = () => {
    for (let i = 0; i < 15; i++) {
      setAttendees((attendees) => [...attendees, (attendees[i].mic = true)]);
    }
  };

  const blockAll = () => {
    for (let i = 0; i < 15; i++) {
      setAttendees((attendees) => [...attendees, (attendees[i].view = false)]);
    }
  };

  const unBlockAll = () => {
    for (let i = 0; i < 15; i++) {
      setAttendees((attendees) => [...attendees, (attendees[i].view = true)]);
    }
  };

  const handleLayoutSettings = (e) => {
    e.preventDefault();
    setLayoutSetting(false);
  };

  const getFullScreenElement = () => {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement ||
      document.msFullscreenElement
    );
  };

  const handleFullscreen = () => {
    if (getFullScreenElement()) {
      document.exitFullscreen();
      setFullscreen(false);
    } else {
      document.documentElement.requestFullscreen().catch((e) => console.log(e));
      setFullscreen(true);
    }
    console.log(getFullScreenElement());
  };

  return (
    <div className="App">
      <Modal show={chat} onHide={() => setChat(false)} centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{chat}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <div className="chat-box"></div>
          <form className="chat-form" autocomplete="off">
            <input type="text" id="fname" className="chat-entry" autofocus />
            <button className="btn btn-success py-0 mb-1">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={settings} onHide={() => setSettings(false)} centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Room Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <p>Room settings goes here</p>
        </Modal.Body>
      </Modal>
      <Modal show={layoutSetting} onHide={() => setLayoutSetting(false)} centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Select Layout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <form onSubmit={handleLayoutSettings}>
            <input type="radio" id="5" name="layout" value="5" /> <label for="2">Less than 5 Attendees</label>
            <br></br>
            <input type="radio" id="10" name="layout" value="10" /> <label for="2">Less than 10 Attendees</label>
            <br></br>
            <input type="radio" id="15" name="layout" value="15" /> <label for="2">Less than 15 Attendees</label>
            <br></br>
            <input type="radio" id="20" name="layout" value="20" /> <label for="2">Less than 20 Attendees</label>
            <br></br>
            <button className="btn btn-secondary py-1 px-5 mx-2 mt-4" onClick={() => setLayoutSetting(false)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success py-1 px-5 mx-2 mt-4">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <div className="side-bar">
        <img
          src="https://test.flowapp.com/admin/fd8f9bd28913e92b223841e8d9c9ce73.svg"
          alt=""
          width="100"
          className="logo"
        />
        <div className="subheader">Presenter</div>
        <LayoutIcon className="side-icons" data-tip data-for="test" onClick={() => setLayoutSetting(true)} />
        <ReactTooltip id="test" type="light" effect="solid">
          <span>Change the layout depending on the number of attendees. Click to test.</span>
        </ReactTooltip>
        <br />
        <MicIcon className="side-icons" data-tip data-for="unMuteAll" onClick={unMuteAll} />
        <ReactTooltip id="unMuteAll" type="light" effect="solid">
          <span>Unmute all attendees' microphone. Click to test.</span>
        </ReactTooltip>
        <br />
        <MicOffIcon className="side-icons" data-tip data-for="muteAll" onClick={muteAll} />
        <ReactTooltip id="muteAll" type="light" effect="solid">
          <span>Mute all attendees' microphone. Click to test.</span>
        </ReactTooltip>
        <br />
        <VisibilityIcon className="side-icons" data-tip data-for="allowAllCam" onClick={unBlockAll} />
        <ReactTooltip id="allowAllCam" type="light" effect="solid">
          <span>Broadcast all attendees' camera. Click to test. </span>
        </ReactTooltip>
        <br />
        <VisibilityOffIcon className="side-icons" data-tip data-for="blockAllCam" onClick={blockAll} />
        <ReactTooltip id="blockAllCam" type="light" effect="solid">
          <span>Block all attendees' camera. Click to test. </span>
        </ReactTooltip>
        <br />
        <div className="subheader">Attendee</div>
        {fullscreen ? (
          <FullscreenExitIcon className="side-icons" data-tip data-for="toggleFullscreen" onClick={handleFullscreen} />
        ) : (
          <FullscreenIcon className="side-icons" data-tip data-for="toggleFullscreen" onClick={handleFullscreen} />
        )}
        <ReactTooltip id="toggleFullscreen" type="light" effect="solid">
          <span>Click to toggle fullscreen mode. </span>
        </ReactTooltip>
        <br />
        <PrivateMessage
          className="side-icons"
          data-tip
          data-for="openGeneralChat"
          onClick={() => setChat('Group Chat')}
        />
        <ReactTooltip id="openGeneralChat" type="light" effect="solid">
          <span>Click to open the general chat. </span>
        </ReactTooltip>
        <br />
        <RaiseHandIcon className="side-icons" data-tip data-for="raiseHand" onClick={raiseHand} />
        <ReactTooltip id="raiseHand" type="light" effect="solid">
          <span>Click to raise your hand.</span>
        </ReactTooltip>
        <br />
        <ThumbUpIcon className="side-icons" data-tip data-for="thumbsUp" onClick={handleThumbsUp} />
        <ReactTooltip id="thumbsUp" type="light" effect="solid">
          <span>Send the presenter a thumbsUp. </span>
        </ReactTooltip>
        <br />
        <ThumbDownIcon className="side-icons" data-tip data-for="thumbsDown" onClick={handleThumbsDown} />
        <ReactTooltip id="thumbsDown" type="light" effect="solid">
          <span>Send the presenter a thumbsDown.</span>
        </ReactTooltip>
        <br />
        <div className="side-icons-container" data-tip data-for="mute">
          {mic ? (
            <MicIcon
              className="side-icons"
              onClick={() => {
                setAttendees((attendees) => [...attendees, (attendees[1].mic = false)]);
                setMic(false);
              }}
            />
          ) : (
            <MicOffIcon
              className="side-icons"
              onClick={() => {
                setMic(true);
                setAttendees((attendees) => [...attendees, (attendees[1].mic = true)]);
              }}
              style={{ color: 'red' }}
            />
          )}
          <ReactTooltip id="mute" type="light" effect="solid">
            <span>Click to toggle your mic on and off.</span>
          </ReactTooltip>
        </div>
        <div className="side-icons-container" data-tip data-for="camOff">
          {camera ? (
            <VideocamIcon
              className="side-icons"
              onClick={() => {
                setCamera(false);
                setAttendees((attendees) => [...attendees, (attendees[1].view = false)]);
              }}
            />
          ) : (
            <VideocamOffIcon
              className="side-icons"
              onClick={() => {
                setCamera(true);
                setAttendees((attendees) => [...attendees, (attendees[1].view = true)]);
              }}
              style={{ color: 'red' }}
            />
          )}
          <ReactTooltip id="camOff" type="light" effect="solid">
            <span>Click to toggle your camera on and off.</span>
          </ReactTooltip>
        </div>

        <ScreenShareIcon
          data-tip
          data-for="screenShare"
          className="side-icons"
          onClick={() => setScreenShare(!screenShare)}
          style={screenShare ? { color: 'blue' } : {}}
        />
        <ReactTooltip id="screenShare" type="light" effect="solid">
          <span>Click to toggle screen sharing on and off.</span>
        </ReactTooltip>
        <br />
        <SettingsIcon className="side-icons" data-tip data-for="settings" onClick={() => setSettings(true)} />
        <ReactTooltip id="settings" type="light" effect="solid">
          <span>Click to open the room settings window.</span>
        </ReactTooltip>
      </div>
      <div className="grid-container">
        {attendees.map((attendee, index) => (
          <div key={index} className={presenting === attendee.name ? 'presenting' : 'attending'}>
            {!attendee.view && <div className="blocked">BLOCKED</div>}
            {showHand && attendee.name === 'Tom' ? (
              <RaiseHandIcon className="icon-popup" style={{ color: 'green' }} />
            ) : null}
            {thumbsUp && attendee.name === 'Tom' ? (
              <ThumbUpIcon className="icon-popup" style={{ color: 'blue' }} />
            ) : null}
            {thumbsDown && attendee.name === 'Tom' ? (
              <ThumbDownIcon className="icon-popup" style={{ color: 'red' }} />
            ) : null}
            <img
              src={screenShare && attendee.name === 'Tom' ? myDesktop : attendee.image}
              alt={attendee.name}
              className={presenting === attendee.name ? 'image-presenting' : 'image'}
            ></img>
            <div className={presenting === attendee.name ? 'name-presenting' : 'name'}>
              <div className="attendee-name">{attendee.name}</div>
              <div className="icons">
                {attendee.mic ? (
                  <MicIcon
                    data-tip
                    data-for="inividualMic"
                    className="hover"
                    onClick={() => setAttendees((attendees) => [...attendees, (attendees[index].mic = false)])}
                  />
                ) : (
                  <MicOffIcon
                    data-tip
                    data-for="inividualMic"
                    className="hover"
                    onClick={() => setAttendees((attendees) => [...attendees, (attendees[index].mic = true)])}
                    style={{ color: 'red' }}
                  />
                )}
                <ReactTooltip id="inividualMic" type="light" effect="solid">
                  <span>Toggle to mute or unmute this attendee.</span>
                </ReactTooltip>
                {attendee.view ? (
                  <VisibilityIcon
                    data-tip
                    data-for="inividualView"
                    className="hover"
                    onClick={() => setAttendees((attendees) => [...attendees, (attendees[index].view = false)])}
                  />
                ) : (
                  <VisibilityOffIcon
                    data-tip
                    data-for="inividualView"
                    className="hover"
                    onClick={() => setAttendees((attendees) => [...attendees, (attendees[index].view = true)])}
                    style={{ color: 'red' }}
                  />
                )}
                <ReactTooltip id="inividualView" type="light" effect="solid">
                  <span>Toggle to block or unblock this attendee's camera.</span>
                </ReactTooltip>
                <PrivateMessage className="hover" data-tip data-for="pm" onClick={() => setChat(attendee.name)} />
                <ReactTooltip id="pm" type="light" effect="solid">
                  <span>Click to open the private chat window.</span>
                </ReactTooltip>
                {presenting !== attendee.name && (
                  <SetAsPresenter
                    className="hover"
                    data-tip
                    data-for="presenter"
                    onClick={() => setPresenting(attendee.name)}
                  />
                )}
                <ReactTooltip id="presenter" type="light" effect="solid">
                  <span>Set this attendee as the presenter.</span>
                </ReactTooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
