import rootState from "./self"
import { RootState } from "typings/store"
import { createDraftSafeSelector } from "@reduxjs/toolkit"


const icon = (state: RootState) => state.icon
const _icon = createDraftSafeSelector(rootState, icon)

export default _icon;