# Basic RN MacOS

Basic RN MacOS is a ready to go out of the box, no mystery errors or searching for compatable packages.

- React Native 0.63.4
- React Native MacOS 0.63.18
- React Navigation
- Redux
- Redux-Saga
- React Native Vector Icons

## How It Works

1. clone repo
2. run yarn
3. cd macos
4. pod install
5. open BasicApp.xcworkspace in Xcode
6. Allow project to index and press run
7. After first run, you can use yarn mac from the command line

## Resize Screen

- Inside macos/BasicApp-macOS/ViewController.m

```swift
view.frame = CGRectMake(0, 0, 1200, 800);
```
