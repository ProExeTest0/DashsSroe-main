import {GET_API_DATA, GET_PAGE_LIST, USER} from '../../action/Type';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAPIData} from '../../../global/Globalapi';
import {useState} from 'react';
import {ApiData} from '../../action/Listaction';
// export const mydata = async () => {
//   const dispatch = useDispatch();

//   const [getdata, setGetdata] = useState();

//   const getAPIData = () => {
//     axios({
//       method: 'get',
//       url: 'https://jsonplaceholder.typicode.com/posts',
//     })
//       .then(res => {
//         console.log('res data', res);
//         // dispatch(ApiData(res?.data));
//       })
//       .catch(err => console.log(err));
//     // const dispatch = useDispatch();
//   };

//   // let tmp = await getAPIData();
//   // console.log('tmp ', tmp);
//   // setGetdata(tmp);
//   // dispatch(ApiData(getdata));
//   useEffect(() => {
//     // mydata();
//     getAPIData();
//   }, []);
// };
const INITIAL_STATE = {
  data: [0],
  arr: [],
  userdata: [],
};
const pageListReducer = (state = INITIAL_STATE, action) => {
  console.log('Action::', state);
  switch (action.type) {
    case GET_PAGE_LIST:
      return {
        ...state,
        data: action.payload,
      };
    case GET_API_DATA:
      return {
        ...state,
        arr: action.payload,
      };
    case USER:
      return {
        ...state,
        userdata: action.payload,
      };
    default:
      return state;
  }
};
export default pageListReducer;
