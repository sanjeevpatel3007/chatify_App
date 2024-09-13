// import React from 'react'
// import User from './User'

// export default function Users({ users }) {

//     return (
//         <div>
//             <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>message</h1>


//             <div className=' flex-1 hide-scrollbar overflow-y-auto' style={{ maxHeight: "calc(80vh)" }}>
//                 {
//                     users.map((user, index) => (
//                         <div key={index}>
//                             <User user={user} />
//                         </div>
//                     ))

//                 }
//             </div>



//         </div>
//     )
// }



import React from 'react';
import User from './User'; // Import the User component

const Users = ({ users }) => {
  if (!users || users.length === 0) {
    return <div>No users found</div>; // Handle case where no users are available
  }

  return (
    <div>
       <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>message</h1>


           <div className=' flex-1 hide-scrollbar overflow-y-auto' style={{ maxHeight: "calc(80vh)" }}>
        {
          users.map((user, index) => (
            <div key={index}>
              <User user={user} /> {/* Pass individual user data to the User component */}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Users;
