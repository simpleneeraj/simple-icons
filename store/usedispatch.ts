import { useDispatch } from 'react-redux'
import { AppDispatch } from 'typings/store'
const useAppDispatch: () => AppDispatch = useDispatch
export default useAppDispatch;
