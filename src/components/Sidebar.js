import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
function Sidebar() {
    const [user]=useAuthState(auth);
    const [channels]=useCollection(db.collection('rooms'));
    console.log(user);
    function truncate(string, n){
        return string?.length>n ? string.substr(0,n-1)+'...' : string;
    }
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>{user.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {truncate(user?.email,25)}
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            {/* <SidebarOption Icon={} title=""/> */}
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption/>
            {channels?.docs.map(doc=>(
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
            ))}
        </SidebarContainer>
    )
}

export default Sidebar
const SidebarContainer=styled.div`
    background-color:var(--slack-color);
    color:white;
    flex:0.3;
    max-width:260px;
    margin-top:60px;
    border-top:1px solid #49274b;
    >hr{
        margin-top:10px;
        margin-bottom:10px;
        border:1px solid #49274b;
    }
`;
const SidebarHeader=styled.div`
    display:flex;
    justify-content:space-between;
    padding:13px;
    border-bottom:1px solid #49274b;
    align-items:center;
    >.MuiSvgIcon-root{
        padding:8px;
        color:#49274b;
        background-color:white;
        font-size:18px;
        border-radius:999px;

    }
`;
const SidebarInfo=styled.div`
    flex:1;
    >h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }
    >h3{
        display:flex;
        font-weight:400;
        font-size:13px;
        align-items:center;
        >.MuiSvgIcon-root{
            font-size:14px;
            margin-top:1px;
            margin-right:2px;
            color:green;
        }
    }
`;