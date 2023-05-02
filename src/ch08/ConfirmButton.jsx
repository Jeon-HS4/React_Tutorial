import React, {useState} from "react";

function ConfirmButton(props){
    const[isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () =>{
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm}disabled={isConfirmed}>
            {isConfirmed ? "확인하기":"확인됨"}
        </button>
    );
}



/* 
class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    함수 사용 (class Component)
    handleConfirm(){
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    arrow 함수 사용
    handleConfirm = () => {
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render(){
        return(
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}
*/
export default ConfirmButton;
