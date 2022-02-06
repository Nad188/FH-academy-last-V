import React, { useState } from "react";
import {
  Button,
  SidebarContainer,
  Logo,
  Stickbar,
  Item,
  Text,
  Profile,
  Details,
  Name,
  Logout,
  Container
} from "./SidebarElements";
import Home from '../../../images/svg-12.svg'
import AddTeacher from '../../../images/svg-13.svg'
import  Teachers from '../../../images/svg-14.svg'
import  Courses from '../../../images/svg-15.svg'
import Student from '../../../images/svg-16.svg'
import AddCourse from '../../../images/svg-17.svg'
import LogoutIcon from '../../../images/svg-18.svg'

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <span>FH</span>
        </Logo>
        <Stickbar clicked={click}>
          <Item exact activeClassName="active" to="/AdminHomePage">
            <img src={Home} alt='homeIcon' />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item exact activeClassName="active" to="/ListOfTeachers">
          <img src={Teachers} alt='TeacherIcon' />
            <Text clicked={click}>Teachers</Text>
          </Item>
          <Item exact activeClassName="active" to="/addTeacher">
          <img src={AddTeacher} alt='AddTeacherIcon' />
            <Text clicked={click}>Add Teachers</Text>
          </Item>
          <Item exact activeClassName="active" to="/ListOfStudents">
          <img src={Student} alt='StudentIcon' />
            <Text clicked={click}>Students</Text>
          </Item>
          <Item exact activeClassName="active" to="/ListOfCourses">
          <img src={Courses} alt='CourseIcon' />
            <Text clicked={click}>Courses</Text>
          </Item>
          <Item exact activeClassName="active" to="/AddCours">
          <img src={AddCourse} alt='AddCourseIcon' />
            <Text clicked={click}>Add Courses</Text>
          </Item>
        </Stickbar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="ProfilPic"
          />
          <Details clicked={profileClick}>
            <Name>
              <h5>Nader ben hammouda</h5>
              <a href="/#">View Profil</a>
            </Name>

            <Logout>
              <img src={LogoutIcon} alt="logout" />
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
