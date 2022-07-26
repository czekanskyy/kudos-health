import InputBox from './InputBox';
import Navbar from './Navbar';
import Plans from './Plans';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start gap-16 w-full min-h-screen pt-20 font-poppins">
      <Navbar></Navbar>

      <InputBox></InputBox>
      <Plans></Plans>
    </div>
  );
}
