import React from "react";
import _iconmodel from "store/selectors/_model";
import iconmodel from "store/slices/iconmodel";
import useAppDispatch from "store/usedispatch";
import useAppSelector from "store/useselector";

const useModel = () => {
  const modelState = useAppSelector(_iconmodel);
  const dispatch = useAppDispatch();
  // Return Values

  const openModel = React.useCallback(
    (value: boolean) => {
      dispatch(iconmodel.actions.openModel(value));
    },
    [dispatch]
  );

  return { openModel, modelState };
};
export default useModel;
