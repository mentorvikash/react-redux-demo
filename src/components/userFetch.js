import React, {useEffect} from 'react'
import { fetchUser } from '../redux'
import { connect } from 'react-redux'

function UserFetchData({userData, fetchUserData }) {

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
    {userData.loding ? <p>we are loding....</p>
    : userData.userData ? userData?.userData.map((user,index) => <p key={index}>{user.name}</p>)
    : <p>{userData.error}</p>}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{ 
    userData: state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      fetchUserData: () => dispatch(fetchUser())        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserFetchData)

