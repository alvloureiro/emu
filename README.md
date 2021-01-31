# App emU

Proof of concept of an application to Ume.

## Introduction

In this application the user can:

- Perform login
- Get general information about account
- Get informatio about purchases
- Check on which ume1s partners it can be used

## Technology stack

- React Native >= 0.63.x
- React Redux >= 7.7.2
- Redux >= 4.0.5
- Redux Saga >= 1.1.3
- ReactNavigation >= 5.x
- Eva Design >= 2.x
- UI Kitten >= 5.x

## How to run

#### Android

Check if you have all dependencies installed to enable you run on Android, please follow [this](https://reactnative.dev/docs/environment-setup) guide

- In one terminal starts the metro server

```sh
$ npx react-native start --reset-cache
```

Open another terminal and type

```sh
$ npx react-native run-android
```

#### iOS

Notice that you should install and configure XCode on your Mac

Once you have your React Native project initialized, you can run:

```sh
npx react-native run-ios
```

To run on a specific device you should use `--simulator`

```sh
npx react-native run-ios --simulator="iPhone SE"
```

For some libraries, i.e, `react-navigation` we should install extras packages

```sh
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

and install pods

```sh
npx pod-install ios
```

Details you can check [this](https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project)

## Contributing & Git Strategy

#### Commit messages

All the commit messages should use the imperative mood in description, first you should use a single line commit
if necessary you can explain the commit's motivation always using the `what` and `why`.

##### Message structure

The commit message consists of the three distinct parts separated by a blank line: the title,
an optional body and the author's signature. It looks like below:

```
    [TagName] Short description

    Body of explanation, explaning the motivation use the rule `what` and `why`,
    not the how.

    Resolves: <Issue-Number>, ...

    <Author-Signature>
```

The TagName should follow the pattern listed below:

```
[Bump]   Use to point to a release commit
[Chore]  Use to designate a small task or small change
[Feat]   Use to designate a new Feature
[Fix]    A bug fix
[Infra]  Use to designate update configs, no production code change
[Refact] Use to designate a production code refactoring
[Tests]  Use to tests, refactoring tests, no production code changes
```
