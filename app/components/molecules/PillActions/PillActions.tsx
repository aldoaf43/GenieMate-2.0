import { Button } from "@/app/components";
import { AVAILABLE_ACTIONS } from "@/app/models";
import {actionsAtom} from "@/app/store";
import {
  DocumentTextIcon,
  PresentationChartBarIcon,
  PuzzlePieceIcon
} from "@heroicons/react/24/solid";
import { useAtom } from "jotai";

const PillActions = () => {
  const actionsIcons = [
    <DocumentTextIcon className="h-5 w-5" />,
    <PuzzlePieceIcon className="h-5 w-5" />,
    <PresentationChartBarIcon className="h-5 w-5" />,
  ];

  const actions = AVAILABLE_ACTIONS.map((action) => ({
    label: action,
    icon: actionsIcons[AVAILABLE_ACTIONS.indexOf(action)],
  }));

  const [selectedActions, setSelectedActions] = useAtom(actionsAtom);

  return (
    <div className="mb-4 flex flex-col gap-5 sm:flex-row sm:items-center">
      <div className="items-center">
        <div className="flex flex-wrap items-center gap-4">
          {actions.map((actions) => (
            <Button
              variant={selectedActions.includes(actions.label) ? "noShadow" : "default"  }
              size={"default"}
              key={actions.label}
              className="flex items-center gap-2"
              onClick={() => setSelectedActions(selectedActions.includes(actions.label) ? selectedActions.filter((action) => action !== actions.label) : [...selectedActions, actions.label])}
            >
              <span className="cursor-pointer flex items-center gap-2 justify-center">
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