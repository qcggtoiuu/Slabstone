import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Filter, Palette, Grid2X2, X } from "lucide-react";
import {
  defaultColorOptions,
  defaultPatternOptions,
  defaultApplicationOptions,
} from "@/types/product";

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FilterBarProps {
  onFilterChange?: (type: string, value: string) => void;
  selectedFilters?: Record<string, string>;
  colorOptions?: FilterOption[];
  patternOptions?: FilterOption[];
  applicationOptions?: FilterOption[];
}

const FilterBar = ({
  onFilterChange = () => {},
  selectedFilters = {},
  colorOptions = defaultColorOptions,
  patternOptions = defaultPatternOptions,
  applicationOptions = defaultApplicationOptions,
}: FilterBarProps) => {
  return (
    <div className="w-full bg-white border-b p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="text-sm font-medium">Màu sắc</span>
              <div className="flex gap-2">
                {colorOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={
                      selectedFilters["color"] === option.value
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => onFilterChange("color", option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <Separator orientation="vertical" className="h-6" />

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Bề mặt</span>
              <div className="flex gap-2">
                {patternOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={
                      selectedFilters["pattern"] === option.value
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => onFilterChange("pattern", option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <Separator orientation="vertical" className="h-6" />

            <div className="flex items-center gap-2">
              <Grid2X2 className="h-4 w-4" />
              <span className="text-sm font-medium">Ứng dụng</span>
              <div className="flex gap-2">
                {applicationOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={
                      selectedFilters["application"] === option.value
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => onFilterChange("application", option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {Object.keys(selectedFilters).length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                Object.keys(selectedFilters).forEach((key) => {
                  onFilterChange(key, "");
                });
              }}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Xóa bộ lọc
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
