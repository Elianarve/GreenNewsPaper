import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#222222] py-6 text-center font-poppins text-white">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 InnovaTech
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#FB005A] focus:text-[#FB005A]"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#FB005A] focus:text-[#FB005A]"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#FB005A] focus:text-[#FB005A]"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-[#FB005A] focus:text-[#FB005A]"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
