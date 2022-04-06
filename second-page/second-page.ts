import { EventData, Frame, Label, NavigatedData, Page, TextField } from '@nativescript/core'
import { MyData } from '~/MyData'


var page: Page
var fromSecond: TextField
var myData: MyData
var fromMain: Label

export function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object
  fromMain = page.getViewById("fromMain")
    myData = page.navigationContext.data

    fromMain.text = myData.forward
 // page.bindingContext = new HomeViewModel()
}

export function onNavigateToMain(args: EventData){
   fromSecond = page.getViewById("fromSecond")
  myData.backward = fromSecond.text
    page.frame.goBack()
}