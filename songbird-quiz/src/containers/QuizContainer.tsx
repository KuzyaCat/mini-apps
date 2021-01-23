import * as React from "react";
import { Quiz } from "../components/Quiz";
import birdsData from "../data/birdsData";

interface IQuizContainerProps {
  activeQuestion: number;
  haveCorrectAnswer: boolean;
  setCorrectAnswer: () => void;
  resetCorrectAnswer: () => void;
  nextActiveQuestion: () => void;
  decreaseTempPoints: () => void;
  resetTempPoints: () => void;
  setScore: () => void;
  toggleShowQuiz: () => void;
}

interface IQuizContainerState {
  mysteryBirdId?: number;
  mysteryBirdImage?: string;
  mysteryBirdName?: string;
  mysteryBirdAudio?: string;
  birds: string[];
  classes: string[];
  showChoice: boolean;
  chosenBirdId: number;
  chosenBirdName: string;
  chosenBirdImage: string;
  chosenBirdAudio: string;
  chosenBirdSpecies: string;
  chosenBirdDescription: string;
}

export class QuizContainer extends React.Component<IQuizContainerProps, IQuizContainerState> {
  constructor(props: IQuizContainerProps) {
    super(props);
    this.setMysteryBird = this.setMysteryBird.bind(this);
    this.checkVariant = this.checkVariant.bind(this);
    this.choiceClick = this.choiceClick.bind(this);
    this.initClasses = this.initClasses.bind(this);
    this.choose = this.choose.bind(this);
    this.resetChoice = this.resetChoice.bind(this);

    this.state = {
      birds: [],
      classes: [],
      showChoice: false,
      chosenBirdId: 0,
      chosenBirdName: '',
      chosenBirdImage: '',
      chosenBirdAudio: '',
      chosenBirdSpecies: '',
      chosenBirdDescription: ''
    }
  }

  public componentDidMount() {
    this.setMysteryBird(this.props.activeQuestion);
    this.setBirds(this.props.activeQuestion);
    this.initClasses();
  }

  public componentDidUpdate(prevProps: any) {
    if (prevProps.activeQuestion !== this.props.activeQuestion && this.props.activeQuestion < 6) {
      this.setBirds(this.props.activeQuestion);
      this.setMysteryBird(this.props.activeQuestion);
    }
  }

  private soundClick(bool: string = "wrong"): void {
    let audioSrc: string;
    if (bool === "right") {
      audioSrc = "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3";
    } else if (bool === "wrong") {
      audioSrc = "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3";

    }
    const audio = new Audio(audioSrc);
    audio.play();
    setTimeout(() => audio.pause(), 1000);
  }

  public choose(index: number): void {
    this.setState({
      showChoice: true
    });

    const chosenBirdId: number = birdsData[this.props.activeQuestion].find(x => x.id === index + 1).id;
    const chosenBirdName: string = birdsData[this.props.activeQuestion].find(x => x.id === index + 1).name;
    const chosenBirdImage: string = birdsData[this.props.activeQuestion].find(x => x.id === index + 1).image;
    const chosenBirdAudio: string = birdsData[this.props.activeQuestion].find(x => x.id === index + 1).audio;
    const chosenBirdSpecies: string = birdsData[this.props.activeQuestion].find(x => x.id === index + 1).species;
    const chosenBirdDescription: string = birdsData[this.props.activeQuestion].find(x => x.id === index + 1).description;

    this.setState({
      chosenBirdId: chosenBirdId,
      chosenBirdName: chosenBirdName,
      chosenBirdImage: chosenBirdImage,
      chosenBirdAudio: chosenBirdAudio,
      chosenBirdSpecies: chosenBirdSpecies,
      chosenBirdDescription: chosenBirdDescription
    });
  }

  public initClasses(): void {
    const classes: string[] = [];
    for (let i = 0; i < 6; i += 1) {
      classes.push('li-dot');
    }
    this.setState({
      classes: classes
    });
  }

  public setMysteryBird(ind: number): void {
    const index: number = Math.floor(Math.random() * 6);

    const mysteryBirdId: number = birdsData[ind].find(x => x.id === index + 1).id;
    const mysteryBirdName: string = birdsData[ind].find(x => x.id === index + 1).name;
    console.log(mysteryBirdName);

    const mysteryBirdImage: string = birdsData[ind].find(x => x.id === index + 1).image;
    const mysteryBirdAudio: string = birdsData[ind].find(x => x.id === index + 1).audio;

    this.setState({
      mysteryBirdName: mysteryBirdName,
      mysteryBirdImage: mysteryBirdImage,
      mysteryBirdAudio: mysteryBirdAudio,
      mysteryBirdId: mysteryBirdId
    });
  }

  public setBirds(index: number): void {
    const birdsNameArr: string[] = [];

    for (let i = 0; i < birdsData.length; i += 1) {
      birdsNameArr.push(birdsData[index][i].name)
    }

    this.setState({
      birds: birdsNameArr
    });
  }

  public checkVariant(index: number): boolean {
    return this.state.mysteryBirdId === index + 1;
  }

  public choiceClick(event: any): void {
    const rightClass: string = "li-dot right";
    const wrongClass: string = "li-dot wrong";

    if (this.checkVariant(+event.target.dataset.order) && !this.props.haveCorrectAnswer) {
      this.soundClick("right");
      const classes: string[] = this.state.classes;
      classes[+event.target.dataset.order] = rightClass;
      this.setState({
        classes: classes
      })
      this.props.setCorrectAnswer();
      this.choose(+event.target.dataset.order);
      this.props.setScore();
    } else if (!this.props.haveCorrectAnswer && !event.target.classList.contains(wrongClass)) {
      this.soundClick("wrong");
      const classes: string[] = this.state.classes;
      classes[+event.target.dataset.order] = wrongClass;
      this.setState({
        classes: classes
      })
      this.choose(+event.target.dataset.order);
      this.props.decreaseTempPoints();
    } else {
      this.choose(+event.target.dataset.order);
    }
  }

  public resetChoice(): void {
    this.setState({
      showChoice: false
    })
  }

  public render() {
    return <Quiz
      activeQuestion={this.props.activeQuestion}
      setMysteryBird={this.setMysteryBird}
      setBirds={this.setBirds}
      birds={this.state.birds}
      mysteryBirdId={this.state.mysteryBirdId}
      mysteryBirdName={this.state.mysteryBirdName}
      mysteryBirdImage={this.state.mysteryBirdImage}
      mysteryBirdAudio={this.state.mysteryBirdAudio}
      haveCorrectAnswer={this.props.haveCorrectAnswer}
      checkVariant={this.checkVariant}
      setCorrectAnswer={this.props.setCorrectAnswer}
      resetCorrectAnswer={this.props.resetCorrectAnswer}
      nextActiveQuestion={this.props.nextActiveQuestion}
      choiceClick={this.choiceClick}
      classes={this.state.classes}
      chosenBirdId={this.state.chosenBirdId}
      chosenBirdName={this.state.chosenBirdName}
      chosenBirdImage={this.state.chosenBirdImage}
      chosenBirdAudio={this.state.chosenBirdAudio}
      chosenBirdSpecies={this.state.chosenBirdSpecies}
      chosenBirdDescription={this.state.chosenBirdDescription}
      showChoice={this.state.showChoice}
      resetChoice={this.resetChoice}
      initClasses={this.initClasses}
      resetTempPoints={this.props.resetTempPoints}
      toggleShowQuiz={this.props.toggleShowQuiz}
    />;
  }
}