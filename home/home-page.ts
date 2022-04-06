import { EventData, Frame, Label, NavigatedData, Page, TextField } from '@nativescript/core'
import { MyData } from '~/MyData'
import { HomeViewModel } from './home-view-model'

var page: Page
var fromMain: TextField
var myData: MyData

export function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object
if (!args.isBackNavigation) {
  myData = new MyData()
}else{
  var fromSecond: Label = page.getViewById("fromSecond")
  fromSecond.text = myData.backward
}
 // page.bindingContext = new HomeViewModel()
}

export function onNavigateToSecond(args: EventData){
  fromMain = page.getViewById("fromMain")
  myData.forward = fromMain.text

  var navigationOptions ={
    moduleName: 'second-page/second-page',
    context:{
      data: myData,
      param1: "Weyland-Yutani corp"
    }
  }
  Frame.topmost().navigate(navigationOptions)
}