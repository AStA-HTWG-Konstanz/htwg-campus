# HTWGapp

The HTWGapp is a free application, for student from the HTWG in constance.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them
* Node.js
* Nativescript
* Playground app

### Installing

* 1.) Install Node.js <br/>
<br/>
First update your system

```
$ sudo apt update
```

then  install nodejs

```
$ sudo apt install nodejs npm
```

and verify it was successfull

```
$ nodejs --version
v8.10.0
```

finally get the Node package manager npm

```
$ sudo apt install npm
```

and verify again it was successfull

```
$ npm --version
3.5.2
```

* 2.) Install the NativeScript CLI

```
npm install -g nativescript
```

and verify that tns is working

```
$ tns
# NativeScript CLI
┌─────────┬─────────────────────────────────────────────────────────────────────┐
│ Usage   │ Synopsis                                                            │
│ General │ $ tns <Command> [Command Parameters] [--command <Options>]          │
│ Alias   │ $ nativescript <Command> [Command Parameters] [--command <Options>] │
└─────────┴─────────────────────────────────────────────────────────────────────┘
```
3.) Install the Nativescript Playground app on your mobile Device:
* [Android](https://play.google.com/store/apps/details?id=org.nativescript.play)
* [IOS](https://itunes.apple.com/us/app/nativescript-playground/id1263543946?mt=8&ls=1)

## Workflow

* 1.) Create a new Issue, assign it to you and add a label
* 2.) Press the "+ add cards" button on the projects board and pull the issue in "in progress"-column
* 3.) Create a new Branch for the issue named <br/>
feauture/{here goes the issue id} for enhancement label <br>
fix/{here goes the issue id} for bugs label
* 4.) `git push -u origin branchname` for pushing a feature branch
* 5.) Make a pullrequest into master and wait for confirmation


## Running the app
```
$ tns preview
```
Scan the appeared QR-Code with your Playground app on your mobile device, any
source code changes in form of saves will directly appear on your mobile device.
## Generating new Components
Install the Nativescript schematics

```
$ npm i -g @angular/cli
$ npm i -g @nativescript/schematics
```

Now you can genarete new Components by using

```
$ ng generate component (subfolder/)my-name
```

or 

```
$ ng g c (subfolder/)my-name
```

## Running the tests

//no tests yet

### Break down into end to end tests

//no tests yet

### And coding style tests

//no tests yet

## Deployment

//TODO: add deployment guide

## Built With

* [Nativescript](https://www.nativescript.org/) - Mobile application Framework
* [Angular](https://angular.io/) - Web Framework

## Contributing

Please read [CONTRIBUTING.md](https://github.com/stefan0612/HTWGapp/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Project Management

We use [GithubBoard](https://github.com/stefan0612/HTWGapp/projects) as a task board.

## Authors

* **Stefan Schmunk** - [Stefan0612](https://github.com/stefan0612)
* **Patrick Sterk** - [pat-St](https://github.com/pat-st)

See also the list of [contributors](https://github.com/stefan0612/HTWGapp/contributors) who participated in this project.

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
