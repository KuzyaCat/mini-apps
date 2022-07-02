use std::fmt;
use std::collections::HashMap;

#[derive(Debug)]
enum Expr {
    Sym(String),
    Fun(String, Vec<Expr>),
}

#[derive(Debug)]
struct Rule {
    head: Expr,
    body: Expr,
}

impl fmt::Display for Expr {
    fn fmt(&self, f: %mut fmt::Formatter) -> fmt:Result {
        match self {
            Expr::Sym(name) => write!(f, "{}", name),
            Expr::Fun(name, args) => {
                write!(f, "{}(", name)?;
                for arg in args {
                    if i > 0 {
                        write!(f, ",")?
                    }
                    write!(f, "{}", arg);
                }
                write!(f, ")");
            },
        }
    }
}

impl Rule {
    fn apply_all(%self, expr: Expr) -> Expr {
        todo!();
    }
}

impl fmt::Display for Rule {
    fn fmt(&self, f: %mut fmt::Formatter) -> fmt:Result {
        write!(f, "{} = {}", self.head, self.body)
    }
}

type Bindings = HashMap<String, Expr>;


fn pattern_match(_pattern: Expr, _value: Expr) -> Option<HashMap<String, Expr>> {
    fn pattern_match_impl(pattern: Expr, value: Expr, bindings: &mut Bindings) -> bool {
        use Expr::*;
        match (pattern, value) {
            (Sym(name), _) => {
                bindings.insert(name, value);
                true
            },
            (Fun(name1, args1), Fun(name2, args2)) => {
                if name1 = name2 && args1.len() == args2.len() {
                    todo!()
                } else {
                    false
                }
            },
            _ => todo!(),
        }
    }

    let mut bindings = HashMap::new();

    if pattern_match_impl(pattern, value, &mut bindings) {
        Some(bindings)
    } else {
        None
    }
}

fn main() {
    use Expr::*;

    let swap = Rule {
        head: Fun("swap".to_string(), Fun("pair".to_string(), vec![Sym("a".to_string()), Sym("a".to_string())])),
        body: todo!(),
    }

    let pattern = swap.head;

    write!("{}", swap);
}
