import rootState from "./self"
import { RootState } from "typings/store"
import { createDraftSafeSelector } from "@reduxjs/toolkit"


const iconmodel = (state: RootState) => state.iconmodel
const _iconmodel = createDraftSafeSelector(rootState, iconmodel)

export default _iconmodel;