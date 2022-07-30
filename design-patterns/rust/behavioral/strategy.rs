// Enables an algorithm's behavior to be selected at runtime
trait FlyBehavior {
    fn fly(&self);
}

struct FlyWithWings;

impl FlyBehavior for FlyWithWings {
    fn fly(&self) {
        println!("I can fly!");
    }
}

struct FlyNoWay;

impl FlyBehavior for FlyNoWay {
    fn fly(&self) {
        println!("I can't fly!");
    }
}

trait Duck {
    fn get_fly_behavior(&self) -> &dyn FlyBehavior;

    fn fly(&self) {
        let s = self.get_fly_behavior();
        s.fly();
    }
}

impl Duck for MallardDuck {
    fn get_fly_behavior(&self) -> &dyn FlyBehavior {
        return &(*self.fly_behaviour);
    }
}

impl MallardDuck {
    fn new(fly_behaviour: Box<dyn FlyBehavior>) -> Self {
        MallardDuck { fly_behaviour }
    }

    fn set_fly_behaviour(&mut self, fly_behaviour: Box<dyn FlyBehavior>) {
        self.fly_behaviour = fly_behaviour;
    }
}
