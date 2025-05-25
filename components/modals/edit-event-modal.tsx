"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, Loader2, PlusCircle, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn, deepEqual } from "@/lib/utils";
import { useEditEventModal } from "@/hooks/use-edit-event-modal";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { UpdateEventFormSchema } from "@/lib/validator";
import { useAction } from "@/hooks/use-action";
import { updateEventAction } from "@/actions/update-event";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useEffect } from "react";
import { useLocationModal } from "@/hooks/use-location-modal";
import { toast } from "@/hooks/use-toast";
import { useDashboard } from "@/context/dashboard-context";

type EventFormValues = z.infer<typeof UpdateEventFormSchema>;

export function EditEventModal() {
  const { venues, isLoading } = useDashboard();

  const id = useEditEventModal((state) => state.id);
  const isOpen = useEditEventModal((state) => state.isOpen);
  const onClose = useEditEventModal((state) => state.onClose);

  const locationModal = useLocationModal();

  const { data: eventData } = useQuery<EventFormValues>({
    queryKey: ["event", id],
    queryFn: () => fetcher(`/api/events/${id}`),
    enabled: !!id && isOpen,
  });

  const form = useForm<EventFormValues>({
    resolver: zodResolver(UpdateEventFormSchema),
    defaultValues: {}, // Initially empty values
  });

  const { reset } = form;

  useEffect(() => {
    if (eventData) {
      reset({
        ...eventData,
        startDate: new Date(eventData.startDate),
        endDate: new Date(eventData.endDate),
        locationId: eventData.locationId,
        tickets: eventData.tickets.map((ticket) => ({
          ...ticket,
          startSale: new Date(ticket.startSale),
          endSale: new Date(ticket.endSale),
        })),
      }); // Update the form's default values when eventData changes
    }
  }, [eventData, reset]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "tickets",
  });

  const { execute, isLoading: isUpdating } = useAction(updateEventAction, {
    onSuccess: () => {
      toast({
        title: "Updated",
        description: `Event got successfully updated.`,
      });

      onClose();
    },
    onError: (err) => {
      toast({
        title: "Something went wrong.",
        description: err,
      });
    },
  });

  function onSubmit(values: EventFormValues) {
    const equal = isEqual();

    if (equal) {
      toast({
        description: "No changes made",
      });
      return;
    }

    execute({
      ...values,
      startDate: new Date(values.startDate),
      endDate: new Date(values.endDate),
      tickets: values.tickets.map((ticket) => ({
        ...ticket,
        startSale: new Date(ticket.startSale),
        endSale: new Date(ticket.endSale),
      })),
    });
  }

  function isEqual() {
    const newValues = form.getValues();

    if (eventData) {
      return deepEqual(newValues, eventData!);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto mb-0">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
        </DialogHeader>
        <DropdownMenuSeparator />
        {!eventData ? (
          <div className="block mx-auto">
            <Loader2 className="animate-spin w-5 h-5 " />
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
              <input type="hidden" name="id" value={eventData.id} />
              <input
                type="hidden"
                name="creatorId"
                value={eventData.creatorId}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter event name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  // defaultValue={eventData.startDate}
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                (field.value instanceof Date
                                  ? field.value
                                  : new Date(field.value)
                                ).toLocaleDateString()
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() ||
                              date > form.getValues("endDate")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  // defaultValue={eventData.endDate}
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                (field.value instanceof Date
                                  ? field.value
                                  : new Date(field.value)
                                ).toLocaleDateString()
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() ||
                              date < form.getValues("startDate")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="locationId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={eventData.locationId}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 mx-auto animate-spin py-1" />
                        ) : venues?.length ? (
                          venues.map((venue) => (
                            <SelectItem key={venue.id} value={venue.id}>
                              {venue.name}
                            </SelectItem>
                          ))
                        ) : (
                          <p className="p-2 text-center text-muted-foreground">
                            Locations found
                          </p>
                        )}

                        <Button
                          variant="ghost"
                          className="w-full mt-2"
                          onClick={locationModal.onOpen}
                        >
                          Create New Location
                        </Button>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter event description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <h3 className="text-lg font-semibold mb-4">Tickets</h3>
                {fields.map((field, index) => (
                  <Card key={field.id} className="mb-4">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Adding ticket id */}
                        {field.id && (
                          <input
                            type="hidden"
                            name={`tickets.${index}.id`}
                            value={field.id}
                          />
                        )}

                        <FormField
                          // defaultValue={eventData.tickets[index].type}
                          control={form.control}
                          name={`tickets.${index}.type`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ticket Type</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          // defaultValue={eventData.tickets[index].price}
                          control={form.control}
                          name={`tickets.${index}.price`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      Number.parseFloat(e.target.value)
                                    )
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          // defaultValue={eventData.tickets[index].quantity}
                          control={form.control}
                          name={`tickets.${index}.quantity`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Quantity</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      Number.parseInt(e.target.value)
                                    )
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          // defaultValue={eventData.tickets[index].startSale}
                          control={form.control}
                          name={`tickets.${index}.startSale`}
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Sale Start</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        (field.value instanceof Date
                                          ? field.value
                                          : new Date(field.value)
                                        ).toLocaleDateString()
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date() ||
                                      date >
                                        form.getValues(
                                          `tickets.${index}.endSale`
                                        )
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          // defaultValue={eventData.tickets[index].endSale}

                          control={form.control}
                          name={`tickets.${index}.endSale`}
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Sale End</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        (field.value instanceof Date
                                          ? field.value
                                          : new Date(field.value)
                                        ).toLocaleDateString()
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date() ||
                                      date > form.getValues("endDate") ||
                                      date <
                                        form.getValues(
                                          `tickets.${index}.startSale`
                                        )
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-4"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove Ticket
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() =>
                    append({
                      type: "",
                      price: 0,
                      quantity: 1,
                      startSale: new Date(),
                      endSale: new Date(),
                    })
                  }
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Ticket
                </Button>
              </div>

              <Button disabled={isUpdating} type="submit">
                Save Changes
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
