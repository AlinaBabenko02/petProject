import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <div>
        {/* <div className={s.fond} >
            <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-background-minty-27.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=833df6ff3e47d04eb37611a1f6f69b82' />
        </div> */}
        <div >
            <div className={s.description} >
                {/* <img src='https://naked-science.ru/wp-content/uploads/2018/11/field_image_hubble-space-telescope-earth1.jpg' /> */}
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    </div>
}
export default ProfileInfo;