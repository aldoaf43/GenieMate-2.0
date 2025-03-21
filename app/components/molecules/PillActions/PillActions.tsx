import { Button } from "@/app/components";
import {
  SparklesIcon,
  CodeBracketIcon,
  LightBulbIcon,
  ChartBarIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

const PillActions = () => {
  const actions = [
    { label: "Summarize text", icon: <SparklesIcon className="h-5 w-5" /> },
    { label: "Code", icon: <CodeBracketIcon className="h-5 w-5" /> },
    { label: "Get advice", icon: <LightBulbIcon className="h-5 w-5" /> },
    { label: "Analyze data", icon: <ChartBarIcon className="h-5 w-5" /> },
    { label: "Analyze images", icon: <PhotoIcon className="h-5 w-5" /> },
  ];

  //TODO: Al tener uno seleccionado poner el borde azul

  return (
    <div className="mb-4 flex flex-col gap-5 sm:flex-row sm:items-center">
      <div className="items-center">
        <div className="my-2 flex flex-wrap items-center gap-4">
          {actions.map((actions) => (
            <Button
              variant={"default"}
              size={"default"}
              key={actions.label}
              className="flex items-center gap-2"
            >
              <span className="cursor-pointer flex items-center gap-2">
                {actions.icon}
                {actions.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillActions;