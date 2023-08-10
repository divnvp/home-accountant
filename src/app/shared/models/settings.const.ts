import { InjectionToken } from "@angular/core";
import { Settings } from "../../settings/models/settings";

export const SETTINGS = new InjectionToken<Settings>('Settings');
