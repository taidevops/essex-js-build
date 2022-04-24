import { Params, ColorBlindnessMode } from '@thematic/color'
import { loadById, Theme, ThemeListing } from '@thematic/core'
import { Dispatch } from 'redux'
import { createAction } from 'redux-actions'

export const themesLoaded = createAction<ThemeListing[]>('App:Themes:Loaded')