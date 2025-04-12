import { title } from "@/components/primitives";

export default function AboutMePage() {
  return (
    <div>
      <h1 className={title()}>About Me!</h1>

    <br /><br /><br />

    <p>I am a cryptid! There are no confirmed photos of meeee</p>
    <a href="https://www.w3schools.com/css/css3_flexbox_container.asp" color="blue">W3 schools!</a>
    <br /><br />
    <p>HOWever! I have a ton of photos of hobbies!</p>
    <div className="flex" flex-wrap="wrap" justify-content="space-evenly" align-content="space-around">
        <div className="basis-1/5">
            <img src="bobross.JPG" alt="bob ross etch a sketch"/>
            <p>This is my Etch-A-Sketch Rendition of one of Bob Ross' paintings! I</p>
            <p>have quite a bit of experience with the Etch A Sketch! I also have other images here!</p>
        </div>
        <div className="basis-1/5">
            <img src="campfire.JPG" alt="campfire EAS" />
            <p>This project took me 2 days! The longest time I've spent on such a project</p>
        </div>
        <div className="basis-1/5"><img src="etchBird.jpg" alt="birds etch" /></div>  
        <div className="basis-1/5"><img src="harx.JPG" alt="DnD town image" /></div>
        <div className="basis-1/5">
            <img src="reindeer.JPG" alt="reindeer etch" />
            <p>This was my first time touching an etch a sketch!</p>
        </div>
    </div>
    <br /><br /><br /><br /><br /><br />
    <div className="flex"  flex-wrap="wrap" justify-content="space-evenly" align-content="space-around">
        <div className="basis-1/3">
            <p>I also am a bit of a geek for pretty mushrooms! This is a Parrot Wax Cap!</p>
            <img src="parrotWax.JPG" alt="parrotwax" />    
        </div>  
        <div className="basis-1/3">
            <img src="rubyyBonnet.PNG" alt="ruby bonnet"/>
            <p>Look! Ruby bonnet! So sweet, so cute, so smoll. Such baby.</p>
        </div>
        <div className="basis-1/3">
            <img src="veiledStinkhorn.PNG" alt="stinkhorn" />
            <p>Veiled stinkhorn!</p>
        </div>
    </div>
    <br /><br /><br /><br /><br /><br />
    <div className="flex"  flex-wrap="wrap" justify-content="space-evenly" align-content="space-around">
            <div className="basis-1/2">
                <p>I also do macrophotography!</p>
                <img src="clovermacro.JPEG" alt="clovers" />
            </div> 
    </div>
    <br /><br /><br />
    <div className="flex"  flex-wrap="wrap" justify-content="space-evenly" align-content="space-around">
        <div className="basis-1/2">
            <p>Another passion of mine is Variant sudoku, which takes regular sudoku and tosses in extra rules!</p>
            <p>These are some puzzles I made</p>
            <img src="dawn.PNG" alt="dawn" />
        </div>
        <div className="basis-1/2">
            <p>This is part of a gift set I gave to a friend!</p>
            <img src="themonster.PNG" alt="The Monster" />
        </div>
    </div>

    <br /><br /><br />
    <div className="flex"  flex-wrap="wrap" justify-content="space-evenly" align-content="space-around">
        <div className="basis-1/2">
            <p>Another pet project/goal of mine is to code Rock Paper Scissors; and all its variants</p>
            <img src="rps7.PNG" alt="7" />
        </div>
        <div className="basis-1/2">
            <img src="rps11.PNG" alt="11" />
        </div>
        <div className="basis-1/2">
            <img src="rps15.PNG" alt="15" />
        </div>
        <div className="basis-1/2">
            <img src="rps101.PNG" alt="101" />
        </div>
    </div>

    <br /><br /><br /><br /><br /><br />

    </div>
  );
}
