import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface Action {
  label: string;
  value: string;
}

const PlayersPage = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<Action | null>(null);

  const players = [
    {
      avatar: "CN",
      name: "Rehan",
      role: "Batsman",
      rank: "#1",
      matches: 32,
      runs: 5648,
    },
    {
      avatar: "CN",
      name: "Ayan",
      role: "Batsman",
      rank: "#2",
      matches: 30,
      runs: 5548,
    },
  ];

  const renderDailogContent = () => {
    if (!action) return null;

    const { label, value } = action;

    return (
      <DialogContent className="bg-white border-0">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle className="text-center">{label}</DialogTitle>
          {["add", "update"].includes(value) && (
            <>
              <Input
                type="text"
                placeholder="Player Name"
                className="shad-input"
              />
              <Input
                type="text"
                placeholder="Player Role"
                className="shad-input"
              />
              <label className="border-2 border-dashed rounded-md relative">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Upload File
                </p>
                <Input
                  type="file"
                  className="shad-input h-32 opacity-0 cursor-pointer"
                />
              </label>
            </>
          )}

          {value === "delete" && (
            <p className="delete-confirmation">
              Are you sure you want to delete
              <span className="text-rose-500">{" Player Name"}</span>?
            </p>
          )}
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-3 md:flex-row">
          <Button
            onClick={() => setOpen(false)}
            variant="outline"
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button className="cursor-pointer w-[100px] bg-rose-500 hover:bg-rose-600">
            <p className="capitalize">{value}</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    );
  };

  return (
    <div>
      <section className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">PlayersPage</h3>
        <Button
          variant="destructive"
          className="bg-rose-500 cursor-pointer"
          onClick={() => {
            setAction({ label: "Add", value: "add" });
            setOpen(true);
          }}
        >
          Add Player
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          {renderDailogContent()}
        </Dialog>
      </section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead> Matches</TableHead>
            <TableHead> Runs</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map(({ avatar, name, role, rank, matches, runs }, idx) => (
            <TableRow key={idx}>
              <TableCell>{avatar}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{role}</TableCell>
              <TableCell>{rank}</TableCell>
              <TableCell>{matches}</TableCell>
              <TableCell>{runs}</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => {
                    setAction({ label: "Update", value: "update" });
                    setOpen(true);
                  }}
                >
                  E
                </Button>
                <Button
                  onClick={() => {
                    setAction({ label: "Delete", value: "delete" });
                    setOpen(true);
                  }}
                >
                  D
                </Button>
                <Button>V</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlayersPage;
