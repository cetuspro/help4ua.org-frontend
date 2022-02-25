const UserAvatar = ({user, className, ...props}) => {
  return (
    <img
      src={`https://eu.ui-avatars.com/api/?background=ffd975&name=${user?.firstName|| user?.lastName ? `${user?.firstName}+${user?.lastName}` : user.id}`}
      alt=""
      className={`w-6 h-6 rounded-full ${className}`}
      {...props}
    />
  );
}

export default UserAvatar;