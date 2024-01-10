import {Accordion, AccordionItem} from "@nextui-org/react";
import {GoPlus} from "react-icons/go";
import {Link as RouterLink} from "react-router-dom";

function ViewQA() {
    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (<div className={'w-1/2 m-auto p-10'}>
            <p className={'text-[35px] text-[#071722] m-auto'}>Question & Answers</p>
            <div className={'mr-6 m-auto w-8 h-8 cursor-pointer'}>
                <RouterLink to={'/q_form'}>
                    <GoPlus size={32}></GoPlus>
                </RouterLink>
            </div>
            <br/>

            <Accordion variant="splitted">
                {/*give sample data*/}
                <AccordionItem key={1} aria-label={'Question 1'} title={'Question 1'}>{defaultContent}</AccordionItem>
                <AccordionItem key={2} aria-label={'Question 2'} title={'Question 2'}>{defaultContent}</AccordionItem>
                <AccordionItem key={3} aria-label={'Question 3'} title={'Question 3'}>{defaultContent}</AccordionItem>

            </Accordion>

        </div>);
}

export default ViewQA;