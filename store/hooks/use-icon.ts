import { useCallback } from "react";
import iconSlice from "store/slices/icon";
import useAppDispatch from "store/usedispatch";
import useAppSelector from "store/useselector";
import { IconStateType } from "typings";

const useIcons = () => {
    const data: IconStateType = useAppSelector(
        (state) => state.icon
    );

    const update = useAppDispatch();

    const handIcon = useCallback(
        (value: any) => {
            update(iconSlice.actions.setIconName(value));
        },
        [update]
    );

    return { handIcon, data };
};
export default useIcons;
