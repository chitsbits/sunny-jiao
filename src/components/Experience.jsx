import Timeline from "./Timeline";
import { useTheme } from "./ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="pt-30 pb-20">
      <Timeline isDarkMode={isDarkMode} />
    </div>
  );
};

export default Experience;
