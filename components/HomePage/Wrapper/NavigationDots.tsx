type NavigationDotsProps = {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => (
  <div className="self-center flex flex-col gap-2 p-2">
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        
        <a
          href={`#${item}`}
          key={item + index}
          className="w-[10px] h-[10px] rounded-full"
          style={active === item ? { background: "#7e30dd" } : {background: "#918f8f"}}
        ></a>
      )
    )}
  </div>
);

export default NavigationDots;
